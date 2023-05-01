import PropTypes from 'prop-types';
import { StyledProfile, StyledDescription, StyledImgProfile, StyledWrapper, StyledStats, StyledItem } from './Profile.styled';   

const Profile = ({username, tag, location, avatar='https://cdn-icons-png.flaticon.com/512/1077/1077012.png', stats}) => {
    return (
  <StyledProfile>
  <StyledWrapper>
    <StyledImgProfile
      src={avatar}
      alt="User avatar"
    />
    <StyledDescription>{username}</StyledDescription>
    <StyledDescription>{tag}</StyledDescription>
    <StyledDescription>{location}</StyledDescription>
  </StyledWrapper>
  <StyledStats>
    <StyledItem>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </StyledItem>
    <StyledItem>
      <span>Views</span>
      <span>{stats.views}</span>
    </StyledItem>
    <StyledItem>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </StyledItem>
  </StyledStats>
</StyledProfile>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired, 
};

export default Profile;