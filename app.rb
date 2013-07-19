require 'sinatra/base'
require './result.rb'
require 'json'
require './database'


class App < Sinatra::Base

      get '/' do
      erb :index

      end

      post '/selection' do
        content_type :json
        @computer_choice = computer_picks
        @user_choice = params[:picks]
        @result = result(@user_choice, @computer_choice)
        Shot.create(player1_shot: @user_choice, player2_shot: @computer_choice, rally_winner: @result)
        return {computer_choice: @computer_choice, winner: @result}.to_json
      #take what has been sent by JS, and return some json
      end

      get '/shots' do
      content_type :json
      (params[:amount] == "all") ? @shots = Shot.all : @shots = Shot.last

      return @shots.to_json

      end

end






     
     