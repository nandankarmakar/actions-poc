import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as github from '@actions/github'

function run(){

    // 1) Get Some input Info
    const bucket = core.getInput('bucket', {required: true})
    const bucketRegion = core.getInput('bucket-region', {required: true})
    const distFolder = core.getInput('dist-folder', {required:true})

    //2) Upload Bucket
    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)

    core.notice('Hello from my custom javascript action')
}

run()