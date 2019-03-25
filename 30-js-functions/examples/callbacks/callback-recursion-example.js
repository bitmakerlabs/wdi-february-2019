const activities = [
  { name: 'jumping jacks',       duration: 3000 },
  { name: 'jogging on the spot', duration: 3000 },
  { name: 'skipping',            duration: 2000 },
  { name: 'planks',              duration: 4000 },
  { name: 'push-ups',            duration: 2500 },
  { name: 'sit-ups',             duration: 2500 }
]

const nextActivity = () => {
  const activity = activities.shift()
  if (activity) {
    console.log(activity.name)
    setTimeout(nextActivity, activity.duration)
  } else {
    console.log('Time for cool-down')
  }
}

console.log('Ready set go ... ')

nextActivity()
