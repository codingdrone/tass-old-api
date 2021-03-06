/**
 * Reindex JobCandidates data in Elasticsearch using data from database
 */
const config = require('config')
const { Interview } = require('../../src/models')
const logger = require('../../src/common/logger')
const helper = require('../../src/common/helper')

const jobCandidateId = helper.getParamFromCliArgs()
const index = config.get('esConfig.ES_INDEX_JOB_CANDIDATE')
const reIndexAllJobCandidatesPrompt = `WARNING: this would remove existent data! Are you sure you want to reindex the index ${index}?`
const reIndexJobCandidatePrompt = `WARNING: this would remove existent data! Are you sure you want to reindex the document with id ${jobCandidateId} in index ${index}?`

const jobCandidateModelOpts = {
  modelName: 'JobCandidate',
  include: [{
    model: Interview,
    as: 'interviews'
  }]
}

async function reIndexJobCandidates () {
  if (jobCandidateId === null) {
    await helper.promptUser(reIndexAllJobCandidatesPrompt, async () => {
      try {
        await helper.indexBulkDataToES(jobCandidateModelOpts, index, logger)
        process.exit(0)
      } catch (err) {
        logger.logFullError(err, { component: 'reIndexJobCandidates' })
        process.exit(1)
      }
    })
  } else {
    await helper.promptUser(reIndexJobCandidatePrompt, async () => {
      try {
        await helper.indexDataToEsById(jobCandidateId, jobCandidateModelOpts, index, logger)
        process.exit(0)
      } catch (err) {
        logger.logFullError(err, { component: 'reIndexJobCandidates' })
        process.exit(1)
      }
    })
  }
}

reIndexJobCandidates()
