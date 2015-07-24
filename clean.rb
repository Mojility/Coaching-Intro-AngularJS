#!env ruby

#
# Clean up the working dirs, avoids having to do a full git reset
#

folders = %w{node_modules}

(0..4).each do |i|
  folders.each do |f|
    `rm -rf stage_#{i}/#{f}`
  end
end
