module Types
  class AnnualDraftType < Types::BaseObject
    field :id, ID, null: false
    field :year, Int, null: false
    field :draft_date, GraphQL::Types::ISO8601Date, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
