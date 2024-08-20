import Sidebar from "@/components/Sidebar";
import { useAuth, UserButton } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  Channel,
  ChannelHeader,
  ChannelList,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  useCreateChatClient,
  Window,
} from "stream-chat-react";

export default function RootLayout() {
  const [token, setToken] = useState<string | null>(null);
  const { getToken, userId } = useAuth();

  const apiKey = import.meta.env.VITE_STREAM_API_KEY;

  // Fetch user token from Clerk
  useEffect(() => {
    const getUserCredentials = async () => {
      try {
        const token = await getToken();

        setToken(token);
      } catch (error) {
        console.error("Error getting credentials:", error);
      }
    };

    getUserCredentials();
  }, [getToken]);

  const filters = { members: { $in: [userId] }, type: "messaging" };
  const options = { presence: true, state: true };
  const sort = { last_message_at: -1 };


  // Initialize the chat client only after the token is set
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: token || "",
    userData: { id: userId || "" },
  });

  if (!client) {
    return (
      <div>
        <UserButton />
      </div>
    );
  }

  return (
    <div className="w-full md:flex min-h-screen">
      {/* <Sidebar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section> */}

      <Chat client={client}>
        <ChannelList sort={sort} filters={filters} options={options} />
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
}
