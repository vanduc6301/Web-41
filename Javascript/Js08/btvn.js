// Cho 2 mảng dữ liệu chứa thông tin user và order như sau:

const users = [
  { userId: 1, name: "Alice" },
  { userId: 2, name: "Bob" },
  { userId: 3, name: "John" },
];

const orders = [
  { orderId: 101, userId: 1, product: "Laptop" },
  { orderId: 102, userId: 2, product: "Phone" },
  { orderId: 103, userId: 1, product: "Tablet" },
];

// Bài 1

// Viết hàm ghép dữ liệu từ mảng users vào mảng orders sao cho mỗi đơn hàng đều bao gồm thông tin về user tương ứng

// Hàm nhận các tham số
// - Mảng users
// - Mảng orders
// Kết quả: Dữ liệu sau khi ghép
function mergeUsersAndOrders(users, orders) {
  const usersMap = {};
  users.forEach((user) => {
    usersMap[user.id] = user;
  });

  const mergedOrders = orders.map((order) => {
    const user = usersMap[order.userId];
    return {
      ...orders,
      user: user || null,
    };
  });

  return mergedOrders;
}

const result = mergeUsersAndOrders(users, orders);
console.log(result);

// Ví dụ kết quả:

// const combined = [
//   { orderId: 101, userId: 1, product: "Laptop", userName: "Alice" },
//   { orderId: 102, userId: 2, product: "Phone", userName: "Bob" },
//   { orderId: 103, userId: 1, product: "Tablet", userName: "Alice" },
// ];

// Bài 2

// Viết hàm ghép dữ liệu từ mảng orders vào mảng users sao cho mỗi user sẽ bao gồm TẤT cả đơn hàng họ đã đặt

// Hàm nhận các tham số
// - Mảng users
// - Mảng orders
// Kết quả: Dữ liệu sau khi ghép

// Ví dụ kết quả:

const combined = [
  {
    userId: 1,
    name: "Alice",
    orders: [
      { orderId: 101, userId: 1, product: "Laptop" },
      { orderId: 103, userId: 1, product: "Tablet" },
    ],
  },
  {
    userId: 2,
    name: "Bob",
    orders: [{ orderId: 102, userId: 2, product: "Phone" }],
  },
  { userId: 3, name: "John", orders: [] },
];

// Bài 3

// Cho một danh sách các cuộc họp trong ngày, sắp xếp thứ tự các cuộc họp theo thời gian bắt đầu

// Ví dụ danh sách họp
const meetings = [
  { title: "Meeting A", startTime: "09:00", endTime: "10:00" },
  { title: "Meeting B", startTime: "11:00", endTime: "12:00" },
  { title: "Meeting C", startTime: "08:00", endTime: "09:30" },
];

// Hàm nhận vào tham số:
// - Danh sách các cuộc họp
// Kết quả: Trả về danh sách sau khi sắp xếp

function sortMeetingsByStartTime(meetings) {
  return meetings.sort((a, b) => {
    // So sánh thời gian bắt đầu của hai cuộc họp
    return a.startTime.localeCompare(b.startTime);
  });
}

const sortedMeetings = sortMeetingsByStartTime(meetings);
console.log("bai 3:");
console.log(sortedMeetings);
// Bài 4

// Cho một danh sách các mặt hàng trong kho, mỗi mặt hàng bao gồm thông tin ngày sản xuất và hạn sử dụng (số tháng tính từ ngày sản xuất), tìm và lọc các sản phẩm đã hết hạn

// Ví dụ danh sách các mặt hàng
const products = [
  { name: "Milk", manufactureDate: "2024-01-10", expiryInMonths: 6 },
  { name: "Cheese", manufactureDate: "2023-10-01", expiryInMonths: 12 },
  { name: "Yogurt", manufactureDate: "2024-04-15", expiryInMonths: 3 },
  { name: "Juice", manufactureDate: "2023-07-20", expiryInMonths: 18 },
  { name: "Bread", manufactureDate: "2024-10-01", expiryInMonths: 1 },
];

// Hàm nhận vào tham số:
// - Danh sách các mặt hàng
// Kết quả: Danh sách các mặt hàng đã hết hạn
function getExpiredProducts(products) {
  const currentDate = new Date();
  return products.filter((product) => {
    const manufactureDate = new Date(product.manufactureDate);
    const expiryDate = new Date(
      manufactureDate.setMonth(
        manufactureDate.getMonth() + product.expiryInMonths
      )
    );

    return expiryDate < currentDate;
  });
}

const expiredProducts = getExpiredProducts(products);
console.log("bai 4:");
console.log("cac mat hang da het han ", expiredProducts);

// Bài 5

// Một công ty muốn tạo báo cáo phân tích thị trường dựa trên nhóm khách hàng, hãy viết hàm tạo dữ liệu nhóm khách hàng dựa trên tệp dữ liệu khách hàng có sẵn

// Ví dụ tệp dữ liệu khách hàng

const customers = [
  { name: "Ba", gender: "Male", ageGroup: "Adult", city: "Hanoi" },
  { name: "Mai Anh", gender: "Female", ageGroup: "Teen", city: "Hanoi" },
  { name: "Đức", gender: "Male", ageGroup: "Adult", city: "Ho Chi Minh" },
  { name: "Phương", gender: "Female", ageGroup: "Adult", city: "Ho Chi Minh" },
];

// Nhóm theo gender

const groupByGender = {
  Male: [
    { name: "Ba", gender: "Male", ageGroup: "Adult", city: "Hanoi" },
    { name: "Đức", gender: "Male", ageGroup: "Adult", city: "Ho Chi Minh" },
  ],
  Female: [
    { name: "Mai Anh", gender: "Female", ageGroup: "Teen", city: "Hanoi" },
    {
      name: "Phương",
      gender: "Female",
      ageGroup: "Adult",
      city: "Ho Chi Minh",
    },
  ],
};

// Nhóm theo city

const groupByCity = {
  Hanoi: [
    { name: "Ba", gender: "Male", ageGroup: "Adult", city: "Hanoi" },
    { name: "Mai Anh", gender: "Female", ageGroup: "Teen", city: "Hanoi" },
  ],
  "Ho Chi Minh": [
    { name: "Đức", gender: "Male", ageGroup: "Adult", city: "Ho Chi Minh" },
    {
      name: "Phương",
      gender: "Female",
      ageGroup: "Adult",
      city: "Ho Chi Minh",
    },
  ],
};

// Hàm nhận vào các tham số:
// - Tệp dữ liệu khách hàng (tham khảo ví dụ trên)
// - Kiểu dữ liệu phân nhóm (một key bất kỳ)
// Kết quả: Tệp dữ liệu đã được phân nhóm (object)
