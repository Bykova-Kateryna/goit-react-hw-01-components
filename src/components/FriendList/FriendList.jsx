import PropTypes from 'prop-types'
import { FriendListSection, FriendListItem, FriendStatusOn, FriendStatusOff, FriendImage } from './FriendList.styled'

export const FriendList = ({friends}) => {
    const friendListItem = friends.map((friend) => {
            return ( 
              <FriendListItem key={friend.id}>
                {friend.isOnline ? <FriendStatusOn/> : <FriendStatusOff/>}
  <FriendImage src={friend.avatar} alt={friend.name} width="48" />
  <p>{friend.name}</p>
</FriendListItem>
              )
        })
    return (
    <FriendListSection>
    {friendListItem}
    </FriendListSection>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
};

