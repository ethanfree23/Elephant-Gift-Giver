puts "Deleting data..."
User.destroy_all
Giftee.destroy_all
Company.destroy_all
Gift.destroy_all

puts "Creating users..."
u1 = User.create(name: "Adam", address: "123 A Street, Columbus, Ohio")
u2 = User.create(name: "Bill", address: "123 B Street, Miami, Florida")
u3 = User.create(name: "Corey", address: "123 C Street, Austin, Texas")
u4 = User.create(name: "Dan", address: "123 D Street, Ventura, California")
u5 = User.create(name: "Eren", address: "123 E Street, Myrtle Beach, South Carolina")

puts "Creating giftees..."
g1 = Giftee.create(name: "Anabelle", address: "1 A St., Apple, California", category1: "Fruits", category2: "Sex", category3: "Flowers", price_low: 20, price_high: 1000)
g2 = Giftee.create(name: "Brittany", address: "2 B St., Bend, Oregon", category1: "Sex", category2: "Flowers", category3: "Drugs", price_low: 20, price_high: 1000)
g3 = Giftee.create(name: "Christa", address: "3 C St., Coon, Washington", category1: "Flowers", category2: "Drugs", category3: "Antiques", price_low: 20, price_high: 1000)
g4 = Giftee.create(name: "Dannie", address: "4 D St., Dinner, Montana", category1: "Drugs", category2: "Antiques", category3: "Golfing", price_low: 20, price_high: 1000)
g5 = Giftee.create(name: "Eren", address: "5 E St., Elmo, Idaho", category1: "Antiques", category2: "Golfing", category3: "Automobiles", price_low: 20, price_high: 1000)
g6 = Giftee.create(name: "Fiona", address: "6 F St., Fudge, Colorado", category1: "Golfing", category2: "Automobiles", category3: "Gardening", price_low: 20, price_high: 1000)
g7 = Giftee.create(name: "Greg", address: "7 G St., Giant, Nevada", category1: "Automobiles", category2: "Gardening", category3: "Weapons", price_low: 20, price_high: 1000)
g9 = Giftee.create(name: "Henrieta", address: "8 H St., Hope, Arkansas", category1: "Gardening", category2: "Weapons", category3: "Liquid Goods", price_low: 20, price_high: 1000)
g9 = Giftee.create(name: "Ix", address: "9 I St., Igloo, Alaska", category1: "Weapons", category2: "Liquid Goods", category3: "Fruits", price_low: 20, price_high: 1000)
g10 = Giftee.create(name: "Jackie", address: "10 J St., Jungle, Hawaii", category1: "Liquid Goods", category2: "Fruits", category3: "Sex", price_low: 20, price_high: 1000)

# puts "Creating companies..."
# c1 = Company.create(company_name: "Henry's", address: "", category1_name: "Fruits", category2_name: "Candy", category3_name: "Weapons")
# c2 = Company.create(company_name: "Brazzers", address: "", category1_name: "Sex", category2_name: "Candy", category3_name: "Gardening")
# c3 = Company.create(company_name: "Flowers", address: "", category1_name: "Flowers", category2_name: "Gardening", category3_name: "Candy")
# c4 = Company.create(company_name: "Silk Road", address: "", category1_name: "Drugs", category2_name: "Sex", category3_name: "Liquid Goods")
# c5 = Company.create(company_name: "Antique Website", address: "", category1_name: "Antiques", category2_name: "Gardening", category3_name: "Automobiles")
# c6 = Company.create(company_name: "Golf Website", address: "", category1_name: "Golfing", category2_name: "Sex", category3_name: "Drugs")
# c7 = Company.create(company_name: "Car Website", address: "", category1_name: "Automobiles", category2_name: "Weapons", category3_name: "Liquid Goods")
# c8 = Company.create(company_name: "Gardening Website", address: "", category1_name: "Gardening", category2_name: "Candy", category3_name: "Fruits")
# c9 = Company.create(company_name: "Weapon Website", address: "", category1_name: "Weapons", category2_name: "Sex", category3_name: "Liquid Goods")
# c10 = Company.create(company_name: "Liquid Goods Website", address: "", category1_name: "Liquid Goods", category2_name: "Sex", category3_name: "Drugs")

puts "Creating gifts..."
Gift.create(item_name: "Peaches", category: "Fruits", user_id: u1.id , giftee_id: g1.id)
Gift.create(item_name: "Pears", category: "Fruits", user_id: u1.id, giftee_id: g1.id)
Gift.create(item_name: "Brittle Candy", category: "Candy", user_id: u2.id, giftee_id: g2.id)
Gift.create(item_name: "Chocolates", category: "Candy", user_id: u3.id, giftee_id: g3.id)
Gift.create(item_name: "Golf certificate", category: "Golfing", user_id: u4.id, giftee_id: g4.id)
# Gift.create(item_name: "Nissan", category: "Automobiles", user_id: 7, giftee_id: 1)
# Gift.create(item_name: "Porsche", category: "Automobiles", user_id: 7, giftee_id: 1)
# Gift.create(item_name: "Lambo", category: "Automobiles", user_id: 7, giftee_id: 1)
# Gift.create(item_name: "Thongs", category: "Sex", user_id: 2, giftee_id: 1)
# Gift.create(item_name: "Whip", category: "Sex", user_id: 2, giftee_id: 1)
# Gift.create(item_name: "Dildo", category: "Sex", user_id: 2, giftee_id: 1)
# Gift.create(item_name: "Lube", category: "Sex", user_id: 2, giftee_id: 1)
# Gift.create(item_name: "Xanax", category: "Drugs", user_id: 4, giftee_id: 1)
# Gift.create(item_name: "Adderall", category: "Drugs", user_id: 4, giftee_id: 1)
# Gift.create(item_name: "Money", category: "Liquid Goods", user_id: 10, giftee_id: 1)
# Gift.create(item_name: "Diamonds", category: "Liquid Goods", user_id: 10, giftee_id: 1)
# Gift.create(item_name: "Ruby", category: "Liquid Goods", user_id: 10, giftee_id: 1)
# Gift.create(item_name: "Gun", category: "Weapons", user_id: 9, giftee_id: 1)
# Gift.create(item_name: "Chair", category: "Antiques", user_id: 5, giftee_id: 1)
# Gift.create(item_name: "Roses", category: "Flowers", user_id: 3, giftee_id: 1)
# Gift.create(item_name: "Seeds", category: "Gardening", user_id: 8, giftee_id: 1)