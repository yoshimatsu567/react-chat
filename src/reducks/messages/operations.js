import { db } from "../../firebase";
import { PostAction, FetchMessagesAction } from "./actions";

export const sendMessage = ({ sentence, username }) => {
  return async (dispatch) => {
    const data = {
      message: {
        sentence: sentence,
        username: username,
        postId: "",
      },
    };

    const postRef = db.ref("messages").push(data);
    const postId = postRef.key;
    (await postRef).update({
      message: {
        sentence: sentence,
        username: username,
        postId: postId,
      },
    });

    dispatch(
      PostAction({
        sentence: data.message.sentence,
        username: data.message.username,
        postId: postId,
      })
    );
  };
};

export const fetchMessageData = () => {
  return async (dispatch) => {
    const chats = [];
    db.ref("messages").on("child_added", (snapshot) => {
      snapshot.forEach((snap) => {
        chats.push(snap.val());
      });
      dispatch(
        FetchMessagesAction({
          data: chats.reverse(),
        })
      );
    });
    console.log(chats);
  };
};
