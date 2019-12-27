# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

team_attributes = [
  {name: 'Arizona Cardinal', slug: 'arizona-cardinals'},
  {name: 'Baltimore Ravens', slug: 'baltimore-ravens'},
  {name: 'Buffalo Bills', slug: 'buffalo-bills'},
  {name: 'Cleveland Browns', slug: 'cleveland-browns'},
  {name: 'Green Bay Packers', slug: 'green-bay-packers'},
  {name: 'New York Giants', slug: 'new-york-giants'},
  {name: 'New York Jets', slug: 'new-york-jets'},
  {name: 'New England Patriots', slug: 'new-england-patriots'},
]

team_attributes.each do |attrs|
  unless Team.find_by_slug(attrs[:slug])
    created = Team.create(attrs)
    puts "Created team: #{created.inspect}"
  end
end
