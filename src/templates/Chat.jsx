// import React, { useState, useEffect, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserName, getMessagesList } from "../reducks/messages/selector";
// import { fetchMessageData } from "../reducks/messages/operations";
// import { Box, Typography, Grid } from "@material-ui/core";

// const Chat = (props) => {
//   return (
//     <Box>
//       {props.messagesList.map((props) => {
//         return (
//           <Box key={props.value.postId}>
//             {props.username === "春日" ? (
//               <UserMessage
//                 sentence={props.value.sentence}
//                 username={props.value.username}
//               />
//             ) : (
//               <RegisterMessage
//                 sentence={props.value.sentence}
//                 username={props.value.username}
//               />
//             )}
//           </Box>
//         );
//       })}
//     </Box>
//   );
// };

// export default Chat;
