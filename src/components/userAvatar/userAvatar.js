import { convertBufferToImage } from "./../../utils/convertBufferToImage";

export const displayUserAvatar = (user) => {
  let userImg = "";
  if (user.avatar) {
    userImg = convertBufferToImage(
      user.avatar.img.data,
      user.avatar.contentType
    );
  }
  if (userImg) {
    return <img src={userImg} alt={user.name} className="user-avatar" />;
  }
  return (
    <img
      src="/img/default-user-img.jpg"
      className="user-avatar"
      alt="userPic"
    />
  );
};
