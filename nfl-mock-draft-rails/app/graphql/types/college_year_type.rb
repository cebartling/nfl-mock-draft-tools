module Types
  class CollegeYearType < Types::BaseEnum
    value 'FRESHMAN', description: 'Freshman'
    value 'SOPHOMORE', description: 'Sophomore'
    value 'JUNIOR', description: 'Junior'
    value 'SENIOR', description: 'Senior'
    value 'GRADUATE', description: 'Graduate'
  end
end
