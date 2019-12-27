# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

team_attributes = [
  {name: 'Atlanta Falcons', slug: 'atlanta-falcons'},
  {name: 'Arizona Cardinal', slug: 'arizona-cardinals'},
  {name: 'Baltimore Ravens', slug: 'baltimore-ravens'},
  {name: 'Buffalo Bills', slug: 'buffalo-bills'},
  {name: 'Carolina Panthers', slug: 'carolina-panthers'},
  {name: 'Chicago Bears', slug: 'chicago-bears'},
  {name: 'Cincinnati Bengals', slug: 'cincinnati-bengals'},
  {name: 'Cleveland Browns', slug: 'cleveland-browns'},
  {name: 'Dallas Cowboys', slug: 'dallas-cowboys'},
  {name: 'Denver Broncos', slug: 'denver-broncos'},
  {name: 'Detroit Lions', slug: 'detroit-lions'},
  {name: 'Green Bay Packers', slug: 'green-bay-packers'},
  {name: 'Houston Texans', slug: 'houston-texans'},
  {name: 'Indianapolis Colts', slug: 'indianapolis-colts'},
  {name: 'Jacksonville Jaguars', slug: 'jacksonville-jaguars'},
  {name: 'Kansas City Chiefs', slug: 'kansas-city-chiefs'},
  {name: 'Los Angeles Chargers', slug: 'los-angeles-chargers'},
  {name: 'Los Angeles Rams', slug: 'los-angeles-rams'},
  {name: 'Miami Dolphins', slug: 'miami-dolphins'},
  {name: 'Minnesota Vikings', slug: 'minnesota-vikings'},
  {name: 'New England Patriots', slug: 'new-england-patriots'},
  {name: 'New Orleans Saints', slug: 'new-orleans-saints'},
  {name: 'New York Giants', slug: 'new-york-giants'},
  {name: 'New York Jets', slug: 'new-york-jets'},
  {name: 'Oakland Raiders', slug: 'oakland-raiders'},
  {name: 'Pittsburgh Steelers', slug: 'pittsburgh-steelers'},
  {name: 'Philadelphia Eagles', slug: 'philadelphia-eagles'},
  {name: 'San Francisco 49ers', slug: 'san-francisco-49ers'},
  {name: 'Seattle Seahawks', slug: 'seattle-seahawks'},
  {name: 'Tampa Bay Buccaneers', slug: 'tampa-bay-buccaneers'},
  {name: 'Tennessee Titans', slug: 'tennessee-titans'},
  {name: 'Washington Redskins', slug: 'washington-redskins'}
]

team_attributes.each do |attrs|
  unless Team.find_by_slug(attrs[:slug])
    created = Team.create(attrs)
    puts "Created team: #{created.inspect}"
  end
end

puts "#{Team.count} teams available"
