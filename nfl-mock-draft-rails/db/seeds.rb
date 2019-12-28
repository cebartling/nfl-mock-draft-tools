# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

team_attributes = [
  {name: 'Atlanta Falcons', slug: 'atlanta-falcons', svg_logo_url: '/svg/atlanta-falcons.svg'},
  {name: 'Arizona Cardinals', slug: 'arizona-cardinals', svg_logo_url: '/svg/arizona-cardinals.svg'},
  {name: 'Baltimore Ravens', slug: 'baltimore-ravens', svg_logo_url: '/svg/baltimore-ravens.svg'},
  {name: 'Buffalo Bills', slug: 'buffalo-bills', svg_logo_url: '/svg/buffalo-bills.svg'},
  {name: 'Carolina Panthers', slug: 'carolina-panthers', svg_logo_url: '/svg/carolina-panthers.svg'},
  {name: 'Chicago Bears', slug: 'chicago-bears', svg_logo_url: '/svg/chicago-bears.svg'},
  {name: 'Cincinnati Bengals', slug: 'cincinnati-bengals', svg_logo_url: '/svg/cincinnati-bengals.svg'},
  {name: 'Cleveland Browns', slug: 'cleveland-browns', svg_logo_url: '/svg/cleveland-browns.svg'},
  {name: 'Dallas Cowboys', slug: 'dallas-cowboys', svg_logo_url: '/svg/dallas-cowboys.svg'},
  {name: 'Denver Broncos', slug: 'denver-broncos', svg_logo_url: '/svg/denver-broncos.svg'},
  {name: 'Detroit Lions', slug: 'detroit-lions', svg_logo_url: '/svg/detroit-lions.svg'},
  {name: 'Green Bay Packers', slug: 'green-bay-packers', svg_logo_url: '/svg/green-bay-packers.svg'},
  {name: 'Houston Texans', slug: 'houston-texans', svg_logo_url: '/svg/houston-texans.svg'},
  {name: 'Indianapolis Colts', slug: 'indianapolis-colts', svg_logo_url: '/svg/indianapolis-colts.svg'},
  {name: 'Jacksonville Jaguars', slug: 'jacksonville-jaguars', svg_logo_url: '/svg/jacksonville-jaguars.svg'},
  {name: 'Kansas City Chiefs', slug: 'kansas-city-chiefs', svg_logo_url: '/svg/kansas-city-chiefs.svg'},
  {name: 'Los Angeles Chargers', slug: 'los-angeles-chargers', svg_logo_url: '/svg/los-angeles-chargers.svg'},
  {name: 'Los Angeles Rams', slug: 'los-angeles-rams', svg_logo_url: '/svg/los-angeles-rams.svg'},
  {name: 'Miami Dolphins', slug: 'miami-dolphins', svg_logo_url: '/svg/miami-dolphins.svg'},
  {name: 'Minnesota Vikings', slug: 'minnesota-vikings', svg_logo_url: '/svg/minnesota-vikings.svg'},
  {name: 'New England Patriots', slug: 'new-england-patriots', svg_logo_url: '/svg/new-england-patriots.svg'},
  {name: 'New Orleans Saints', slug: 'new-orleans-saints', svg_logo_url: '/svg/new-orleans-saints.svg'},
  {name: 'New York Giants', slug: 'new-york-giants', svg_logo_url: '/svg/new-york-giants.svg'},
  {name: 'New York Jets', slug: 'new-york-jets', svg_logo_url: '/svg/new-york-jets.svg'},
  {name: 'Oakland Raiders', slug: 'oakland-raiders', svg_logo_url: '/svg/oakland-raiders.svg'},
  {name: 'Pittsburgh Steelers', slug: 'pittsburgh-steelers', svg_logo_url: '/svg/pittsburgh-steelers.svg'},
  {name: 'Philadelphia Eagles', slug: 'philadelphia-eagles', svg_logo_url: '/svg/philadelphia-eagles.svg'},
  {name: 'San Francisco 49ers', slug: 'san-francisco-49ers', svg_logo_url: '/svg/san-francisco-49ers.svg'},
  {name: 'Seattle Seahawks', slug: 'seattle-seahawks', svg_logo_url: '/svg/seattle-seahawks.svg'},
  {name: 'Tampa Bay Buccaneers', slug: 'tampa-bay-buccaneers', svg_logo_url: '/svg/tampa-bay-buccaneers.svg'},
  {name: 'Tennessee Titans', slug: 'tennessee-titans', svg_logo_url: '/svg/tennessee-titans.svg'},
  {name: 'Washington Redskins', slug: 'washington-redskins', svg_logo_url: '/svg/washington-redskins.svg'}
]

team_attributes.each do |attrs|
  unless Team.find_by_slug(attrs[:slug])
    created = Team.create(attrs)
    puts "Created team: #{created.name}"
  end
end

puts "#{Team.count} teams available"

annual_drafts = [
  {year: 2020, draft_date: Date.strptime('2020-04-23')}
]

annual_drafts.each do |attrs|
  unless AnnualDraft.find_by_year(attrs[:year])
    created = AnnualDraft.create(attrs)
    puts "Created annual draft: #{created.year}"
  end
end

puts "#{AnnualDraft.count} annual drafts available"
