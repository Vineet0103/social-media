import Avatar from "./Avatar";

export default function FriendInfo() {
  return (
    <div className="flex gap-2">
      <Avatar url="https://cdn.britannica.com/27/232027-050-A176084E/Indian-chess-player-Viswanathan-Anand-2015.jpg"/>
      <div>
        <h3 className="font-bold text-xl">Vishy Anand</h3>
        <div className="text-sm leading-3">5 mutual friends</div>
      </div>
    </div>
  );
}