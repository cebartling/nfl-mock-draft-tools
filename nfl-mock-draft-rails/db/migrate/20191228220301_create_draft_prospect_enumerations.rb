class CreateDraftProspectEnumerations < ActiveRecord::Migration[6.0]
  def up
    say_with_time 'Creating football_position_enum enumeration...' do
      ActiveRecord::Base.connection.execute <<~SQL
        CREATE TYPE football_position_enum AS ENUM ('QUARTERBACK', 'RUNNING_BACK', 'FULLBACK', 'TIGHT_END', 'WIDE_RECEIVER', 
          'OFFENSIVE_TACKLE', 'OFFENSIVE_GUARD', 'OFFENSIVE_CENTER', 'DEFENSIVE_END', 'DEFENSIVE_TACKLE', 'EDGE_RUSHER', 
          'OUTSIDE_LINEBACKER', 'INSIDE_LINEBACKER', 'CORNERBACK', 'SAFETY', 'PUNTER', 'KICKER', 'SPECIAL_TEAMS');
      SQL
    end

    say_with_time 'Creating college_year_enum enumeration...' do
      ActiveRecord::Base.connection.execute <<~SQL
        CREATE TYPE college_year_enum AS ENUM ('FRESHMAN', 'SOPHOMORE', 'JUNIOR', 'SENIOR', 'GRADUATE');
      SQL
    end
  end

  def down
    say_with_time 'Removing football_position_enum enumeration...' do
      ActiveRecord::Base.connection.execute <<~SQL
        DROP TYPE football_position_enum;
      SQL
    end

    say_with_time 'Removing college_year_enum enumeration...' do
      ActiveRecord::Base.connection.execute <<~SQL
        DROP TYPE college_year_enum;
      SQL
    end
  end

end
