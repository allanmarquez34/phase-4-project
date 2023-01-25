puts "...seeding estate sales"
10.times {EstateSale.create(name: Faker::FunnyName.unique.two_word_name,
                      description: Faker::Lorem.paragraph_by_chars(number: 150, supplemental: false))}

puts "... seeding users"
10.times {User.create(name: Faker::FunnyName.unique.name,
                     image: Faker::LoremFlickr.image(search_terms: ['person']),
                     email: Faker::Internet.unique.email,
                     password: Faker::Internet.password(min_length: 7, max_length: 10),
                     address: Faker::Address.unique.full_address )}

puts "..seeding items"
100.times {Item.create(title: Faker::Commerce.product_name,
                      image: Faker::LoremFlickr.image(search_terms:['product']),
                      description: Faker::Lorem.paragraph_by_chars(number: 150, supplemental: false),
                      price: Faker::Commerce.price,
                      availability: Faker::Boolean.boolean,
                      likes: false,
                      cart: false,
                      estate_sale: EstateSale.all.sample,
                      user: User.all.sample )}

puts "done seeding"
