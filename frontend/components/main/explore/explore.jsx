import React from 'react';
import TrackTileIndex from '../tracks/track_tile_index';

class Explore extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTracks();
    }

    render() {
        let tracks = Object.values(this.props.tracks);
        let newSongs = tracks.slice(0,5);
        let otherSongs = tracks.slice(5,10);
        let otherOtherSongs = tracks.slice(10,15);
        return (
            <div className="main-body">
                <div className="main-section">
                    <h2>Newest songs</h2>
                    <p>The latest hits, constantly updated</p>
                    {tracks.length && <TrackTileIndex tracks={newSongs} />}
                </div>

                <div className="main-section">
                    <h2>Audiocloud charts</h2>
                    <p>Top hits from the week</p>
                    {tracks.length && <TrackTileIndex tracks={otherSongs} />}
                </div>

                <div className="main-section">
                    <h2>Discover new music</h2>
                    <p>Check out these great songs we think you'll love</p>
                    {tracks.length && <TrackTileIndex tracks={otherOtherSongs} />}
                </div>
            </div>
        )
    }
}

export default Explore;