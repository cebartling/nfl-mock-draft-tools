class CreateDraftProspectEnumerations < ActiveRecord::Migration[6.0]
  def up
    say_with_time 'Creating football_position_enum enumeration...' do
      ActiveRecord::Base.connection.execute <<~SQL
        CREATE TYPE football_position_enum AS ENUM ('Quarterback', 'Running back', 'Fullback', 'Tight end', 'Wide receiver', 
          'Offensive tackle', 'Offensive guard', 'Offensive center', 'Defensive end', 'Defensive tackle', 'Edge rusher', 
          'Outside linebacker', 'Inside linebacker', 'Cornerback', 'Safety', 'Punter', 'Kicker', 'Special teams');
      SQL
    end

    say_with_time 'Creating college_year_enum enumeration...' do
      ActiveRecord::Base.connection.execute <<~SQL
        CREATE TYPE college_year_enum AS ENUM ('Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate');
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
