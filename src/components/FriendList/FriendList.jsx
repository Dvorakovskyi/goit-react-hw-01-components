import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import { StyledList } from './FriendList.styled';

const FriendList = ({ friends }) => {
    return (
        <StyledList>
            {friends.map((friend) => <FriendListItem friend={friend} key={friend.id}/>
            )}
        </StyledList>
    )
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;