import PropTypes from 'prop-types'
import { ProfileContainer, 
  ProfileImage, 
  ProfileUserName, 
  ProfileUserInfo, 
  ProfileInfoList,
  ProfileInfoContent,
  ProfileInfoItem } from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
    <ProfileContainer>
  <div>
    <ProfileImage
      src={avatar}
      alt={username}
      width="250"
    />
    <ProfileUserName>{username}</ProfileUserName>
    <ProfileUserInfo>@{tag}</ProfileUserInfo>
    <ProfileUserInfo>{location}</ProfileUserInfo>
  </div>

  <ProfileInfoList>
    <ProfileInfoItem>
      <ProfileInfoContent>Followers</ProfileInfoContent>
      <ProfileInfoContent>{stats.followers}</ProfileInfoContent>
    </ProfileInfoItem>
    <ProfileInfoItem>
      <ProfileInfoContent>Views</ProfileInfoContent>
      <ProfileInfoContent>{stats.views}</ProfileInfoContent>
    </ProfileInfoItem>
    <ProfileInfoItem>
      <ProfileInfoContent>Likes</ProfileInfoContent>
      <ProfileInfoContent>{stats.likes}</ProfileInfoContent>
    </ProfileInfoItem>
  </ProfileInfoList>
</ProfileContainer>
    )
        
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object
}