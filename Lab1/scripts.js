//Lab 1.1
//1. Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
let players1 = [
  "Altay Bayindir",
  "Victor Lindelöf",
  "Harry Maguire",
  "Harry Maguire",
  "Tyrell Malacia",
];
let players2 = [
  "Diego Piñeiro",
  "Brahim Díaz",
  "Mario Martín",
  "Luka Modric",
  "Toni Kroos",
];
//2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của  thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players

//3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
let allPlayers = [players1, players2];

//4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1 mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào'Thiago', 'Coutinho' và 'Perisic
let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là 'team1', 'draw' và 'team2')
let game = {
  odds: {
    team1: 1.5,
    draw: 2.8,
    team2: 3.2,
  },
};

let { team1, draw, team2 } = game.odds;

// 6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
function printGoals(...scorers) {
  for (let i = 0; i < scorers.length; i++) {
    console.log(`${scorers[i]} đã ghi bàn`);
  }
}
//
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

let winner = team1 > team2 ? "team1" : team2 > team1 ? "team2" : "draw";
console.log(`Đội chiến thắng là: ${winner}`);
