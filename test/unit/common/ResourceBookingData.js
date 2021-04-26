const T01 = {
  resourceBooking: {
    request: {
      projectId: 21,
      userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
      jobId: '36762910-4efa-4db4-9b2a-c9ab54c232ed',
      startDate: '2021-04-03',
      endDate: '2021-05-02',
      memberRate: 13.23,
      customerRate: 13,
      rateType: 'hourly',
      billingAccountId: 68800079
    },
    response: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-03',
        endDate: '2021-05-02',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  },
  workPeriod: {
    request: [{
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      startDate: '2021-03-28',
      endDate: '2021-04-03',
      daysWorked: null,
      paymentStatus: 'pending'
    },
    {
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      startDate: '2021-04-04',
      endDate: '2021-04-10',
      daysWorked: null,
      paymentStatus: 'pending'
    },
    {
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: null,
      paymentStatus: 'pending'
    },
    {
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      startDate: '2021-04-18',
      endDate: '2021-04-24',
      daysWorked: null,
      paymentStatus: 'pending'
    },
    {
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      startDate: '2021-04-25',
      endDate: '2021-05-01',
      daysWorked: null,
      paymentStatus: 'pending'
    },
    {
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      startDate: '2021-05-02',
      endDate: '2021-05-08',
      daysWorked: null,
      paymentStatus: 'pending'
    }]
  }
}
T01.resourceBooking.response.toJSON = () => T01.resourceBooking.response.dataValues
const T02 = {
  resourceBooking: {
    request: {
      projectId: 21,
      userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
      jobId: '36762910-4efa-4db4-9b2a-c9ab54c232ed',
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      memberRate: 13.23,
      customerRate: 13,
      rateType: 'hourly',
      billingAccountId: 68800079
    },
    response: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-11',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  },
  workPeriod: {
    request: [{
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: null,
      paymentStatus: 'pending'
    }]
  }
}
T02.resourceBooking.response.toJSON = () => T02.resourceBooking.response.dataValues
const T03 = {
  resourceBooking: {
    request: {
      projectId: 21,
      userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
      jobId: '36762910-4efa-4db4-9b2a-c9ab54c232ed',
      endDate: '2021-04-17',
      memberRate: 13.23,
      customerRate: 13,
      rateType: 'hourly',
      billingAccountId: 68800079
    },
    response: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: null,
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  }
}
T03.resourceBooking.response.toJSON = () => T03.resourceBooking.response.dataValues
const T04 = {
  resourceBooking: {
    request: {
      projectId: 21,
      userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
      jobId: '36762910-4efa-4db4-9b2a-c9ab54c232ed',
      startDate: '2021-04-17',
      memberRate: 13.23,
      customerRate: 13,
      rateType: 'hourly',
      billingAccountId: 68800079
    },
    response: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-17',
        endDate: null,
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  }
}
T04.resourceBooking.response.toJSON = () => T04.resourceBooking.response.dataValues
const T05 = {
  resourceBooking: {
    request: {
      projectId: 21,
      userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
      jobId: '36762910-4efa-4db4-9b2a-c9ab54c232ed',
      startDate: '2021-04-17',
      endDate: '2021-04-16',
      memberRate: 13.23,
      customerRate: 13,
      rateType: 'hourly',
      billingAccountId: 68800079
    }
  },
  error: {
    message: 'endDate cannot be earlier than startDate'
  }
}
const T06 = {
  resourceBooking: {
    value: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-11',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    },
    request: {
      startDate: '2021-04-13',
      endDate: '2021-04-15'
    },
    response: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-13',
        endDate: '2021-04-15',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  },
  workPeriod: {
    response: [{
      id: '10faf505-d0e3-4d13-a817-7f1319625e91',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: null,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }]
  }
}
T06.resourceBooking.value.toJSON = () => T06.resourceBooking.value.dataValues
T06.resourceBooking.value.update = () => T06.resourceBooking.response
T06.resourceBooking.response.toJSON = () => T06.resourceBooking.response.dataValues
const T07 = {
  resourceBooking: {
    value: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-11',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    },
    request: {
      startDate: '2021-04-10',
      endDate: '2021-04-15'
    },
    response: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-10',
        endDate: '2021-04-15',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  },
  workPeriod: {
    response: [{
      id: '10faf505-d0e3-4d13-a817-7f1319625e91',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: null,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }],
    request: [
      {
        resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        startDate: '2021-04-04',
        endDate: '2021-04-10',
        daysWorked: null,
        paymentStatus: 'pending'
      }
    ]
  }
}
T07.resourceBooking.value.toJSON = () => T07.resourceBooking.value.dataValues
T07.resourceBooking.value.update = () => T07.resourceBooking.response
T07.resourceBooking.response.toJSON = () => T07.resourceBooking.response.dataValues
const T08 = {
  resourceBooking: {
    value: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-11',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    },
    request: {
      startDate: '2021-04-12',
      endDate: '2021-04-18'
    },
    response: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-12',
        endDate: '2021-04-18',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  },
  workPeriod: {
    response: [{
      id: '10faf505-d0e3-4d13-a817-7f1319625e91',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: null,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }],
    request: [
      {
        resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        startDate: '2021-04-18',
        endDate: '2021-04-24',
        daysWorked: null,
        paymentStatus: 'pending'
      }
    ]
  }
}
T08.resourceBooking.value.toJSON = () => T08.resourceBooking.value.dataValues
T08.resourceBooking.value.update = () => T08.resourceBooking.response
T08.resourceBooking.response.toJSON = () => T08.resourceBooking.response.dataValues
const T09 = {
  resourceBooking: {
    value: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-10',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    },
    request: {
      startDate: '2021-04-11',
      endDate: '2021-04-15'
    },
    response: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-11',
        endDate: '2021-04-15',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  },
  workPeriod: {
    response: [{
      id: '10faf505-d0e3-4d13-a817-7f1319625e90',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-04',
      endDate: '2021-04-10',
      daysWorked: null,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }, {
      id: '10faf505-d0e3-4d13-a817-7f1319625e91',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: null,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }],
    request: [
      '10faf505-d0e3-4d13-a817-7f1319625e90'
    ]
  }
}
T09.resourceBooking.value.toJSON = () => T09.resourceBooking.value.dataValues
T09.resourceBooking.value.update = () => T09.resourceBooking.response
T09.resourceBooking.response.toJSON = () => T09.resourceBooking.response.dataValues
const T10 = {
  resourceBooking: {
    value: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-10',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    },
    request: {
      startDate: '2021-04-08',
      endDate: '2021-04-10'
    },
    response: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-08',
        endDate: '2021-04-10',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  },
  workPeriod: {
    response: [{
      id: '10faf505-d0e3-4d13-a817-7f1319625e90',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-04',
      endDate: '2021-04-10',
      daysWorked: null,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }, {
      id: '10faf505-d0e3-4d13-a817-7f1319625e91',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: null,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }],
    request: [
      '10faf505-d0e3-4d13-a817-7f1319625e91'
    ]
  }
}
T10.resourceBooking.value.toJSON = () => T10.resourceBooking.value.dataValues
T10.resourceBooking.value.update = () => T10.resourceBooking.response
T10.resourceBooking.response.toJSON = () => T10.resourceBooking.response.dataValues
const T11 = {
  resourceBooking: {
    value: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-10',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    },
    request: {
      startDate: '2021-04-08',
      endDate: '2021-04-13'
    },
    response: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-08',
        endDate: '2021-04-13',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  },
  workPeriod: {
    response: [{
      id: '10faf505-d0e3-4d13-a817-7f1319625e90',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-04',
      endDate: '2021-04-10',
      daysWorked: 0,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }, {
      id: '10faf505-d0e3-4d13-a817-7f1319625e91',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: 3,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }],
    request: [
      '10faf505-d0e3-4d13-a817-7f1319625e91',
      { daysWorked: 2 }
    ]
  }
}
T11.resourceBooking.value.toJSON = () => T11.resourceBooking.value.dataValues
T11.resourceBooking.value.update = () => T11.resourceBooking.response
T11.resourceBooking.response.toJSON = () => T11.resourceBooking.response.dataValues
const T12 = {
  resourceBooking: {
    value: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-05',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    },
    request: {
      startDate: '2021-04-14',
      endDate: '2021-04-24'
    },
    response: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-14',
        endDate: '2021-04-24',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  },
  workPeriod: {
    response: [{
      id: '10faf505-d0e3-4d13-a817-7f1319625e90',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-04',
      endDate: '2021-04-10',
      daysWorked: 4,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }, {
      id: '10faf505-d0e3-4d13-a817-7f1319625e91',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: 4,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'partially-completed',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }],
    request: [
      '10faf505-d0e3-4d13-a817-7f1319625e90',
      '10faf505-d0e3-4d13-a817-7f1319625e91',
      { daysWorked: 3 },
      {
        resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        startDate: '2021-04-18',
        endDate: '2021-04-24',
        daysWorked: null,
        paymentStatus: 'pending'
      }
    ]
  }
}
T12.resourceBooking.value.toJSON = () => T12.resourceBooking.value.dataValues
T12.resourceBooking.value.update = () => T12.resourceBooking.response
T12.resourceBooking.response.toJSON = () => T12.resourceBooking.response.dataValues
const T13 = {
  resourceBooking: {
    value: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-05',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    },
    request: {
      status: 'cancelled'
    }
  },
  error: {
    httpStatus: 400,
    message: `WorkPeriods with id of 10faf505-d0e3-4d13-a817-7f1319625e91
        has completed or partially-completed payment status.`
  },
  workPeriod: {
    response: [{
      id: '10faf505-d0e3-4d13-a817-7f1319625e90',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-04',
      endDate: '2021-04-10',
      daysWorked: 4,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }, {
      id: '10faf505-d0e3-4d13-a817-7f1319625e91',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: 4,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'completed',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }]
  }
}
T13.resourceBooking.value.toJSON = () => T13.resourceBooking.value.dataValues
const T14 = {
  resourceBooking: {
    value: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-05',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    },
    request: {
      startDate: '2021-04-05',
      endDate: '2021-04-10'
    }
  },
  error: {
    httpStatus: 400,
    message: `WorkPeriods with id of 10faf505-d0e3-4d13-a817-7f1319625e91
        has completed or partially-completed payment status.`
  },
  workPeriod: {
    response: [{
      id: '10faf505-d0e3-4d13-a817-7f1319625e90',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-04',
      endDate: '2021-04-10',
      daysWorked: 4,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }, {
      id: '10faf505-d0e3-4d13-a817-7f1319625e91',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: 4,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'completed',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }]
  }
}
T14.resourceBooking.value.toJSON = () => T14.resourceBooking.value.dataValues
const T15 = {
  resourceBooking: {
    value: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-05',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  },
  workPeriod: {
    response: [{
      id: '10faf505-d0e3-4d13-a817-7f1319625e90',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-04',
      endDate: '2021-04-10',
      daysWorked: 4,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }, {
      id: '10faf505-d0e3-4d13-a817-7f1319625e91',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: 4,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }],
    request: ['10faf505-d0e3-4d13-a817-7f1319625e90', '10faf505-d0e3-4d13-a817-7f1319625e91']
  }
}
T15.resourceBooking.value.toJSON = () => T15.resourceBooking.value.dataValues
T15.resourceBooking.value.destroy = () => undefined
const T16 = {
  resourceBooking: {
    value: {
      dataValues: {
        id: '520bb632-a02a-415e-9857-93b2ecbf7d60',
        projectId: 21,
        userId: 'a55fe1bc-1754-45fa-9adc-cf3d6d7c377a',
        jobId: '6093e58c-683d-4022-8482-5515e8345016',
        startDate: '2021-04-05',
        endDate: '2021-04-17',
        memberRate: 13.23,
        customerRate: 13,
        rateType: 'hourly',
        createdAt: '2020-10-09T04:24:01.048Z',
        createdBy: '57646ff9-1cd3-4d3c-88ba-eb09a395366c',
        status: 'sourcing',
        billingAccountId: 68800079
      }
    }
  },
  error: {
    httpStatus: 400,
    message: `WorkPeriods with id of 10faf505-d0e3-4d13-a817-7f1319625e91
        has completed or partially-completed payment status.`
  },
  workPeriod: {
    response: [{
      id: '10faf505-d0e3-4d13-a817-7f1319625e90',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-04',
      endDate: '2021-04-10',
      daysWorked: 4,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'pending',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }, {
      id: '10faf505-d0e3-4d13-a817-7f1319625e91',
      resourceBookingId: '520bb632-a02a-415e-9857-93b2ecbf7d60',
      userHandle: 'pshah_manager',
      projectId: 21,
      startDate: '2021-04-11',
      endDate: '2021-04-17',
      daysWorked: 4,
      memberRate: null,
      customerRate: null,
      paymentStatus: 'completed',
      createdBy: '00000000-0000-0000-0000-000000000000',
      updatedBy: null,
      createdAt: '2021-04-10T22:25:08.289Z',
      updatedAt: '2021-04-10T22:25:08.289Z'
    }]
  }
}
T16.resourceBooking.value.toJSON = () => T16.resourceBooking.value.dataValues
module.exports = {
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16
}
