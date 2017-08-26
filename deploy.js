const exec = require('child_process').exec

const config = {
  username: 'root',
  password: 'TFWebService05',
  host: '123.206.61.234',
  port: '22',
  serverPath: '/home/tahiti/home',
  dir: './tahiti/',
}

/**
 * run npm build to build source to static file
 * @returns {Promise}
 */
function npmBuild() {
  return new Promise((resolve, reject) => {
    exec('npm run build', { maxBuffer: 1024 * 500 }, (error, stdout) => {
      if (error) {
        global.console.log('<STEP 1> npm build --- error:', error)
        reject(error)
      } else {
        global.console.log('<STEP 1> npm build --- success:')
        resolve(stdout)
      }
    })
  })
}

function ctmp() {
  return new Promise((resolve, reject) => {
    exec('sh ctmp.sh', (error, stdout) => {
      if (error) {
        global.console.log('<STEP 2> ctmp --- error:', error)
        reject(error)
      } else {
        global.console.log('<STEP 2> ctmp --- success')
        resolve(stdout)
      }
    })
  })
}

function rmTmp() {
  return new Promise((resolve, reject) => {
    exec('rm -rf tahiti/', (error, stdout) => {
      if (error) {
        global.console.log('<STEP 4> rm --- error:', error)
        reject(error)
      } else {
        global.console.log('<STEP 4> rm --- success:')
        resolve(stdout)
      }
    })
  })
}

function push() {
  const client = require('scp2')
  const path = `${config.username}:${config.password}@${config.host}:${config.port}:${config.serverPath}`
  global.console.log('<STEP 2> SFTP Transfer start .....')
  return new Promise((resolve, reject) => {
    client.scp(config.dir, path, err => {
      if (err) {
        global.console.log('<STEP 3> SFTP Transfer with SFTP Completed')
        reject(err)
      } else {
        global.console.log('<STEP 3> SFTP Transfer with SFTP Completed')
        resolve()
      }
    })
  })
}

function start() {
  global.console.log('Deploying your project...')
  npmBuild().then(() => ctmp())
    .then(() => push())
    .then(() => rmTmp())
    .then(() => {
      global.console.log('Upload Success!')
    }).catch(e => global.console.log('Upload Error:', e))
}

start()
