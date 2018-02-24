# SAP
# Coding Challenge

Used Expo to create react native app. Used expo notification system to test push notification.

Created a component textblock which is used in App.js file to make the homepage


# Push Notification:

Device Token Id: uw96BFHYQk6oBiq8Zfm_52

Command to send notification:

curl -H "Content-Type: application/json" -X POST https://exp.host/--/api/v2/push/send -d '{
  "to": "ExponentPushToken[uw96BFHYQk6oBiq8Zfm_52]",
  "title":"hello",
  "body": "world",
  "data" : {"hey":1}
}'

# apk link: https://exp-shell-app-assets.s3-us-west-1.amazonaws.com/android%2F%40kripa%2Fchallenge-5f4d7195-19b0-11e8-9298-0a580a782414-signed.apk
