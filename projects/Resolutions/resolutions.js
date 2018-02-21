window.onload = function() {

  /* FITNESS */
  var fitness = new Fitness();
  var fitnessCtx = document.getElementById("weightChart");
  fitness.initWeightChart(fitnessCtx);
  var gymAttendanceCtx = document.getElementById("gymAttendanceChart");
  fitness.initGymAttendanceChart(gymAttendanceCtx);
  var maxCtx = document.getElementById("maxChart");
  fitness.initMaxChart(maxCtx);

  /* INTELLECTUAL */
  var intellectual = new Intellectual();
  var duolingoCtx = document.getElementById("duolingoChart");
  intellectual.initDuolingoChart(duolingoCtx);
  var italianPracticeCtx = document.getElementById("italianPracticeChart");
  intellectual.initItalianPracticeChart(italianPracticeCtx);

  /* DEEPEN RELATIOSHIPS */
  var deepenRelationships = new StrengthenRelationships();
  var familyCallCtx = document.getElementById("familyCallChart");
  deepenRelationships.initFamilyCallChart(familyCallCtx);
}
