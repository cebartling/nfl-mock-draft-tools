module Types
  class FootballPositionType < Types::BaseEnum
    value 'QUARTERBACK', description: 'Quarterback'
    value 'RUNNING_BACK', description: 'Running Back'
    value 'FULLBACK', description: 'Fullback'
    value 'TIGHT_END', description: 'Tight end'
    value 'WIDE_RECEIVER', description: 'Wide receiver'
    value 'OFFENSIVE_TACKLE', description: 'Tackle'
    value 'OFFENSIVE_GUARD', description: 'Guard'
    value 'OFFENSIVE_CENTER', description: 'Center'
    value 'DEFENSIVE_END', description: 'Defensive End'
    value 'DEFENSIVE_TACKLE', description: 'Defensive Tackle'
    value 'EDGE_RUSHER', description: 'Edge rusher'
    value 'OUTSIDE_LINEBACKER', description: 'Outside Linebacker'
    value 'INSIDE_LINEBACKER', description: 'Inside Linebacker'
    value 'CORNERBACK', description: 'Cornerback'
    value 'SAFETY', description: 'Safety'
    value 'PUNTER', description: 'Punter'
    value 'KICKER', description: 'Kicker'
    value 'SPECIAL_TEAMS', description: 'Special teams'
  end
end
