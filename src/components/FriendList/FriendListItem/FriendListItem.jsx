import PropTypes from 'prop-types';
import { StyledItem, StyledStatusOnline, StyledStatusOffline } from './FriendListItem.styled';

const FriendListItem = ({ friend }) => {
    return (
        <StyledItem>
            {friend.isOnline ?
                (<StyledStatusOnline></StyledStatusOnline>) :
                (<StyledStatusOffline></StyledStatusOffline>)}
            <img src={friend.avatar} alt="User avatar" width="48" />
            <p>{friend.name}</p>
        </StyledItem>
    )
};

FriendListItem.propTypes = {
    friend: PropTypes.object.isRequired,
};

export default FriendListItem;