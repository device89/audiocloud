import React from 'react';
import PanelIndex from '../tracks/panel_index';

class Profile extends React.Component {
    fetchUserData(userId) {
        this.props.getUser(userId)
            .fail(() => {
                this.props.history.push('/ohno');
            });
        this.props.getUserTracks(userId);
    }

    componentDidMount() {
        this.fetchUserData(this.props.match.params.userId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.fetchUserData(this.props.match.params.userId);
        }
    }

    render() {
        let profilePic = null;
        if (this.props.user && this.props.user.imageUrl) {
            profilePic = <div className="profile-pic"><img src={this.props.user.imageUrl}/></div>;
        }
        const uploadProfilePic = <button className="upload-pic-button">Upload</button>;
        if (!this.props.user) return null;
        return (
            <div className="profile-content">
                <div className="profile-header">
                    {profilePic}
                    <h1 className="profile-name">{this.props.user.username}</h1>
                    {this.props.user.id === this.props.currentUserId && uploadProfilePic}
                </div>
                <div className="profile-body">
                    <PanelIndex tracks={this.props.tracks} />
                </div>
            </div>
        )
    }
}

export default Profile;