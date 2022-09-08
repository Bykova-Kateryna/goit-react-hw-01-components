import PropTypes from 'prop-types'

export const FriendList = ({friends}) => {
    const friendListItem = friends.map((friend) => {
            return ( 
              <li key={friend.id}>
  <span>{friend.status}</span>
  <img src={friend.avatar} alt={friend.name} width="48" />
  <p>{friend.name}</p>
</li>
              )
        })
    return (
    <ul>
    {friendListItem}
    </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array
}

