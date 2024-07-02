'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chats = () => {
  interface Chat {
    _id: string;
    chatName: string;
    isGroupChat: boolean;
    users: {
      name: string;
      email: string;
    }[];
  }
  
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chats');
        setChats(response.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chats.map((chat) => (
          <div key={chat._id} className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">{chat.chatName}</h2>
            <p className="text-gray-600">{chat.isGroupChat ? 'Group Chat' : 'Individual Chat'}</p>
            <div className="mt-2">
              {chat.users.map((user) => (
                <div key={user.email} className="flex items-center space-x-2">
                  <span className="text-gray-800">{user.name}</span>
                  <span className="text-gray-500">{user.email}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chats;
