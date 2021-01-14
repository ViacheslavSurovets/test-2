import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import { getCurrentUser, auth, googleProvider, createUserProfileDocument } from '../../core/firebase'

import {
    singInSuccess,
    singInFailure,
    signOutSuccess,
    signOutFailure,
    signUpFailure
} from './user.actions'


export function* getSnapshotFromUserAuth( userAuth ) {
    try {
        const userRef = yield call( createUserProfileDocument, userAuth )
        const userSnapshot = yield userRef.get()
        yield put(
            singInSuccess( { id: userSnapshot.id, ...userSnapshot.data() } )
        )
    } catch ( error ) {
        put( singInFailure( error.message ) )
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup( googleProvider )
        yield getSnapshotFromUserAuth( user )
    } catch ( error ) {
        put( singInFailure( error.message ) )
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest( UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle )
}


function* signInWithEmail( { payload: { email, password } } ) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword( email, password )
        yield getSnapshotFromUserAuth( user )
    } catch ( error ) {
        yield put( singInFailure( error.message ) )
    }
}

function* onEmailSignInStart() {
    yield takeLatest( UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail )
}


function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if ( !userAuth ) return
        yield  getSnapshotFromUserAuth( userAuth )
    } catch ( error ) {
        yield put( singInFailure( error.message ) )
    }
}

function* checkUserSession() {
    yield takeLatest( UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated )
}


function* signOut() {
    try {
        yield auth.signOut()
        yield put( signOutSuccess() )
    } catch ( error ) {
        yield signOutFailure( error.message )
    }
}

function* onSignOutStart() {
    yield takeLatest( UserActionTypes.SIGN_OUT_START, signOut )
}


function* signUp( { payload: { email, password, firstName, lastName } } ) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword( email, password )
        yield createUserProfileDocument( user, { firstName, lastName } )
        yield getSnapshotFromUserAuth( user )
    } catch ( error ) {
        yield put( signUpFailure( error.message ) )
    }
}


function* onSignUpStart() {
    yield takeLatest( UserActionTypes.SIGN_UP_START, signUp )
}


export function* userSagas() {
    yield all( [
        call( onGoogleSignInStart ),
        call( onEmailSignInStart ),
        call( checkUserSession ),
        call( onSignOutStart ),
        call( onSignUpStart )
    ] )
}



