// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{"courseName":"Business 101","courseDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat","courseCategory":"Business","courseVideos":[{"videoTitle":"How to Build Business","video":"https://academytemanstartup-testbucket.s3.ap-southeast-1.amazonaws.com/Lei+trailer+fix.mp4"}],"id":"1"}])
}
