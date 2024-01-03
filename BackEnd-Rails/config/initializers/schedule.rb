# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "/path/to/my/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

require 'rufus-scheduler'

scheduler = Rufus::Scheduler.new

scheduler.every '1m' do
    Book.all.each do |book|
        book.save!  # Esto activará el callback before_save y actualizará EST_TIM_RES para cada libro.
      end
end

# Learn more: http://github.com/javan/whenever
