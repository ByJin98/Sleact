import React, { FC } from 'react';
import { ChatWrapper } from './styles';
import gravatar from 'gravatar';
import { IDM } from '@typings/db';
import dayjs from 'dayjs';

interface Props {
  data: IDM;
}

const Chat: FC<Props> = ({ data }) => {
  const user = data.Sender;
  return (
    <ChatWrapper>
      <div className="chat-img">
        <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>{dayjs(data.createdAt).toString()}</span>
        </div>
        <p>{data.content}</p>
      </div>
    </ChatWrapper>
  );
};

export default Chat;