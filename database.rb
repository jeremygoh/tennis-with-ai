require 'data_mapper'
require 'pg'
require "dm-postgres-adapter"

# DataMapper::setup(:default, 'postgres://localhost/tennis-rps-app')
DataMapper::setup(:default,ENV["HEROKU_POSTGRESQL_PINK_URL"] || 'postgres://localhost/tennisrps')

class Shot
  include DataMapper::Resource
  property :id, Serial
  property :player1_shot, Text
  property :player2_shot, Text
  property :rally_winner, Text
end

DataMapper.finalize




