puts "Deleting data..."
User.destroy_all
Giftee.destroy_all
Company.destroy_all
Gift.destroy_all

puts "Creating users..."
u1 = User.create(name: "Adam", email: "adam@email.com", password: "password", city: "Columbus", state: "Ohio")
u2 = User.create(name: "Bill", email: "bill@email.com", password: "password", city: "Miami", state: "Florida")
u3 = User.create(name: "Corey", email: "corey@email.com", password: "password", city: "Austin", state: "Texas")
u4 = User.create(name: "Dan", email: "dan@email.com", password: "password", city: "Ventura", state: "California")
u5 = User.create(name: "Eren", email: "eren@email.com", password: "password", city: "Myrtle Beach", state: "South Carolina")
u6 = User.create(name: "Frank", email: "frank@email.com", password: "password", city: "Pittsburg", state: "Pennsylvania")
u7 = User.create(name: "Gary", email: "gary@email.com", password: "password", city: "Orlando", state: "Florida")
u8 = User.create(name: "Henry", email: "henry@email.com", password: "password", city: "Houston", state: "Texas")
u9 = User.create(name: "Ian", email: "ian@email.com", password: "password", city: "Anaheim", state: "California")
u10 = User.create(name: "John", email: "john@email.com", password: "password", city: "Yonkers", state: "Oklahoma")

puts "Creating giftees..."
g1 = Giftee.create(name: "Anabelle", city: "Apple", state: "California", category1: "Flowers", category2: "Candy", category3: "Golfing", price: "20-100")
g2 = Giftee.create(name: "Brittany", city: "Bend", state: "Oregon", category1: "Flowers", category2: "Golfing", category3: "Automobiles", price: "20-100")
g3 = Giftee.create(name: "Christa", city: "Coon", state: "Washington", category1: "Flowers", category2: "Automobiles", category3: "Fashion", price: "20-100")
g4 = Giftee.create(name: "Dannie", city: "Diner", state: "Montana", category1: "Flowers", category2: "Fashion", category3: "Sporting Goods", price: "100-250")
g5 = Giftee.create(name: "Echo", city: "Elmo", state: "Idaho", category1: "Flowers", category2: "Sporting Goods", category3: "Liquid Goods", price: "100-250")
g6 = Giftee.create(name: "Fiona", city: "Fudge", state: "Colorado", category1: "Flowers", category2: "Liquid Goods", category3: "Weapons", price: "100-250")
g7 = Giftee.create(name: "Greg", city: "Giant", state: "Nevada", category1: "Flowers", category2: "Weapons", category3: "Antiques", price: "250-1000")
g8 = Giftee.create(name: "Henrieta", city: "Hope", state: "Arkansas", category1: "Flowers", category2: "Antiques", category3: "Gardening", price: "250-1000")
g9 = Giftee.create(name: "Isabel", city: "Igloo", state: "Alaska", category1: "Flowers", category2: "Gardening", category3: "Flowers", price: "250-1000")
g10 = Giftee.create(name: "Jackie", city: "Jungle", state: "Hawaii", category1: "Flowers", category2: "Flowers", category3: "Candy", price: "250-1000")


# puts "Creating orders..."
# o1 = Order.create(giftee: g1.name, gift: "Roses", user_id: u1.id, gift_id: g1.id)
# o2 = Order.create(giftee: g2.name, gift: "Tulips", user_id: u2.id, gift_id: g2.id)
# o3 = Order.create(giftee: g3.name, gift: "Brittle Candy", user_id: u3.id, gift_id: g3.id)
# o4 = Order.create(giftee: g4.name, gift: "Chocolates", user_id: u4.id, gift_id: g4.id)
# o5 = Order.create(giftee: g5.name, gift: "Golf certificate", user_id: u5.id, gift_id: g5.id)


puts "Creating gifts..."
Gift.create(gift: "Roses", category: "Flowers", user_id: u1.id , giftee_id: g1.id)
Gift.create(gift: "Tulips", category: "Flowers", user_id: u1.id, giftee_id: g1.id)
Gift.create(gift: "Brittle Candy", category: "Candy", user_id: u2.id, giftee_id: g2.id)
Gift.create(gift: "Chocolates", category: "Candy", user_id: u2.id, giftee_id: g3.id)
Gift.create(gift: "Golf certificate", category: "Golfing", user_id: u3.id, giftee_id: g3.id)
Gift.create(gift: "Set of clubs", category: "Golfing", user_id: u3.id, giftee_id: g3.id)
Gift.create(gift: "Porsche", category: "Automobiles", user_id: u4.id, giftee_id: g4.id)
Gift.create(gift: "Lambo", category: "Automobiles", user_id: u4.id, giftee_id: g4.id)
Gift.create(gift: "Shirt", category: "Fashion", user_id: u5.id, giftee_id: g5.id)
# a10 = Gift.create(gift: "Shoes", category: "Fashion", user_id: u5.id, giftee_id: g5.id)
# a11 = Gift.create(gift: "Tennis ball", category: "Sporting Goods", user_id: u6.id, giftee_id: g6.id)
# a12 = Gift.create(gift: "Helmet", category: "Sporting Goods", user_id: u6.id, giftee_id: g6.id)
# a13 = Gift.create(gift: "Ruby", category: "Liquid Goods", user_id: u7.id, giftee_id: g7.id)
# a14 = Gift.create(gift: "Diamond", category: "Liquid Goods", user_id: u7.id, giftee_id: g7.id)
# a15 = Gift.create(gift: "Pistol", category: "Weapons", user_id: u8.id, giftee_id: g8.id)
# a16 = Gift.create(gift: "Magic Wand", category: "Weapons", user_id: u8.id, giftee_id: g8.id)
# a17= Gift.create(gift: "Chair", category: "Antiques", user_id: u9.id, giftee_id: g9.id)
# a18 = Gift.create(gift: "Mirror", category: "Antiques", user_id: u9.id, giftee_id: g9.id)
# a19 = Gift.create(gift: "Mulch", category: "Gardening", user_id: u10.id, giftee_id: g10.id)
# a20= Gift.create(gift: "Seeds", category: "Gardening", user_id: u10.id, giftee_id: g10.id)

puts "Creating companies..."
c3 = Company.create(name: "Flowers.com", address: "Flower road", category: "Flowers")
c1 = Company.create(name: "Candy.com", address: "Candy road", category: "Candy")
c2 = Company.create(name: "Fashion.com", address: "Fashion road", category: "Fashion")
c4 = Company.create(name: "Sportinggoods.com", address: "Sporting Goods road", category: "Sporthing Goods")
c5 = Company.create(name: "Antiques.com", address: "Antiques", category: "Antiques")
c6 = Company.create(name: "Golfing.com", address: "Golfing road", category: "Golfing")
c7 = Company.create(name: "Automobiles.com", address: "Automobiles road", category: "Automobiles")
c8 = Company.create(name: "Gardening.com", address: "Gardening road", category: "Gardening")
c9 = Company.create(name: "Weapons.com", address: "Weapons road", category: "Weapons")
c10 = Company.create(name: "Liquidgoods.com", address: "Liquid Goods road", category: "Liquid Goods")

