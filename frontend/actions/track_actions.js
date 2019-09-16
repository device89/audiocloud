import * as TrackUtil from '../util/tracks_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

export const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

export const getLatestTracks = num => dispatch => (
    TrackUtil.getLatestTracks(num)
        .then(tracks => dispatch(receiveTracks(tracks)))
)

export const getUserTracks = userId => dispatch => (
    TrackUtil.getUserTracks(userId)
        .then(tracks => dispatch(receiveTracks(tracks)))
);

export const createTrack = track => dispatch => (
    TrackUtil.createTrack(track)
        .then(track => dispatch(receiveTrack(track)))
);