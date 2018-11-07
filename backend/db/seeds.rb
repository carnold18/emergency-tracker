# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Zone.destroy_all
Post.destroy_all
User.destroy_all

allZones = {
    "zones": [
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77001"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77002"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77003"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77004"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77005"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77006"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77007"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77008"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77009"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77010"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77011"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77012"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77013"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77014"
        },
        {
            country:"United States", 
            state:"TX", 
            zip_code:"77015"
        },
    ]
}

allPosts = {
    "posts": [
        {
            message: "Testing 77002", 
            status:0, 
            zone_id: 02
        },
        {
            message: "Testing 77001", 
            status:0, 
            zone_id: 01
        },
        {
            message: "Testing 77007", 
            status:0, 
            zone_id: 07
        },
        {
            message: "Testing 77003", 
            status:0, 
            zone_id: 03
        },
        {
            message: "Testing 77006", 
            status:0, 
            zone_id: 06
        },
        {
            message: "Testing 77006 Message 2", 
            status:0, 
            zone_id: 06
        },
    ]
}

allUsers = {
    "users": [
        {
            first_name: 'Chris', 
            last_name: 'Arnold', 
            email: 'chris@example.com', 
            phone_number: '8172285979', 
            address_line_1: '1524', 
            address_line_2: 'Marshall Street', 
            city: 'Houston', 
            state: 'TX', 
            zip_code: '77006', 
            country: 'United States',
            lat: 29.7397412,
            lng: -95.3988021,
            user_type: 1, 
            status: 0, 
            password: 'example', 
            zone_id: 06
        },
        {
            first_name: 'Janett', 
            last_name: 'Arnold', 
            email: 'janett@example.com', 
            phone_number: '8172285979', 
            address_line_1: '219', 
            address_line_2: 'West Alabama Street', 
            city: 'Houston', 
            state: 'TX', 
            zip_code: '77006', 
            country: 'United States',
            lat: 29.7386521,
            lng: -95.38287199999999, 
            user_type: 0, 
            status: 1, 
            password: 'example', 
            zone_id: 06
        },
        {
            first_name: 'Doug', 
            last_name: 'Arnold', 
            email: 'doug@example.com', 
            phone_number: '8172285979', 
            address_line_1: '1302', 
            address_line_2: 'Goliad Street', 
            city: 'Houston', 
            state: 'TX', 
            zip_code: '77007', 
            country: 'United States',
            lat: 29.7702419,
            lng: -95.3698981,
            user_type: 0, 
            status: 2, 
            password: 'example', 
            zone_id: 07
        },
        {
            first_name: 'Jessie', 
            last_name: 'Arnold', 
            email: 'jessie@example.com', 
            phone_number: '8172285979', 
            address_line_1: '611', 
            address_line_2: 'Hawthorne Street', 
            city: 'Houston', 
            state: 'TX', 
            zip_code: '77006', 
            country: 'United States',
            lat: 229.7422549,
            lng: -95.38690009999999,
            user_type: 0, 
            status: 2, 
            password: 'example', 
            zone_id: 06
        },
    ]
}

allZones[:zones].each do |zone|
    Zone.create(zone)
end

allPosts[:posts].each do |post|
    Post.create(post)
end

allUsers[:users].each do |user|
    User.create(user)
end
