import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ chatrooms, handleReceivedMessage }) => {
  return (
    <Fragment>
      {chatrooms.map(chatroom => {
        return (
          <ActionCable
            key={conversation.id}  
            channel={{ channel: 'MessagesChannel', chatroom: chatroom.id }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;