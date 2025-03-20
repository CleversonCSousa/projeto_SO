function getFormattedTimeData(data) {
  // Cria um objeto para armazenar os dados extraídos
  let timeData = {};

  // Regex para capturar os dados
  const regexUserTime = /User time \(seconds\):\s*(\d+\.\d+)/;
  const regexSystemTime = /System time \(seconds\):\s*(\d+\.\d+)/;
  const regexCpuPercent = /Percent of CPU this job got:\s*(\d+)%/;
  const regexElapsedTime =
    /Elapsed \(wall clock\) time \(h:mm:ss or m:ss\):\s*(.*?)/;
  const regexAvgSharedTextSize = /Average shared text size \(kbytes\):\s*(\d+)/;
  const regexAvgUnsharedDataSize =
    /Average unshared data size \(kbytes\):\s*(\d+)/;
  const regexAvgStackSize = /Average stack size \(kbytes\):\s*(\d+)/;
  const regexAvgTotalSize = /Average total size \(kbytes\):\s*(\d+)/;
  const regexMaxResidentSetSize =
    /Maximum resident set size \(kbytes\):\s*(\d+)/;
  const regexAvgResidentSetSize =
    /Average resident set size \(kbytes\):\s*(\d+)/;
  const regexMajorPageFaults = /Major \(requiring I\/O\) page faults:\s*(\d+)/;
  const regexMinorPageFaults =
    /Minor \(reclaiming a frame\) page faults:\s*(\d+)/;
  const regexVoluntaryContextSwitches = /Voluntary context switches:\s*(\d+)/;
  const regexInvoluntaryContextSwitches =
    /Involuntary context switches:\s*(\d+)/;
  const regexSwaps = /Swaps:\s*(\d+)/;
  const regexFileSystemInputs = /File system inputs:\s*(\d+)/;
  const regexFileSystemOutputs = /File system outputs:\s*(\d+)/;
  const regexSocketMessagesSent = /Socket messages sent:\s*(\d+)/;
  const regexSocketMessagesReceived = /Socket messages received:\s*(\d+)/;
  const regexSignalsDelivered = /Signals delivered:\s*(\d+)/;
  const regexPageSize = /Page size \(bytes\):\s*(\d+)/;
  const regexExitStatus = /Exit status:\s*(\d+)/;

  const userTimeMatch = data.match(regexUserTime);
  if (userTimeMatch) {
    timeData.userTime = parseFloat(userTimeMatch[1]);
  }

  const systemTimeMatch = data.match(regexSystemTime);
  if (systemTimeMatch) {
    timeData.systemTime = parseFloat(systemTimeMatch[1]);
  }

  const cpuPercentMatch = data.match(regexCpuPercent);
  if (cpuPercentMatch) {
    timeData.cpuPercent = parseInt(cpuPercentMatch[1]);
  }

  const elapsedTimeMatch = data.match(regexElapsedTime);
  if (elapsedTimeMatch) {
    timeData.elapsedTime = elapsedTimeMatch[1].trim();
  }

  const avgSharedTextSizeMatch = data.match(regexAvgSharedTextSize);
  if (avgSharedTextSizeMatch) {
    timeData.avgSharedTextSize = parseInt(avgSharedTextSizeMatch[1]);
  }

  const avgUnsharedDataSizeMatch = data.match(regexAvgUnsharedDataSize);
  if (avgUnsharedDataSizeMatch) {
    timeData.avgUnsharedDataSize = parseInt(avgUnsharedDataSizeMatch[1]);
  }

  const avgStackSizeMatch = data.match(regexAvgStackSize);
  if (avgStackSizeMatch) {
    timeData.avgStackSize = parseInt(avgStackSizeMatch[1]);
  }

  const avgTotalSizeMatch = data.match(regexAvgTotalSize);
  if (avgTotalSizeMatch) {
    timeData.avgTotalSize = parseInt(avgTotalSizeMatch[1]);
  }

  const maxResidentSetSizeMatch = data.match(regexMaxResidentSetSize);
  if (maxResidentSetSizeMatch) {
    timeData.maxResidentSetSize = parseInt(maxResidentSetSizeMatch[1]);
  }

  const avgResidentSetSizeMatch = data.match(regexAvgResidentSetSize);
  if (avgResidentSetSizeMatch) {
    timeData.avgResidentSetSize = parseInt(avgResidentSetSizeMatch[1]);
  }

  const majorPageFaultsMatch = data.match(regexMajorPageFaults);
  if (majorPageFaultsMatch) {
    timeData.majorPageFaults = parseInt(majorPageFaultsMatch[1]);
  }

  const minorPageFaultsMatch = data.match(regexMinorPageFaults);
  if (minorPageFaultsMatch) {
    timeData.minorPageFaults = parseInt(minorPageFaultsMatch[1]);
  }

  const voluntaryContextSwitchesMatch = data.match(
    regexVoluntaryContextSwitches
  );
  if (voluntaryContextSwitchesMatch) {
    timeData.voluntaryContextSwitches = parseInt(
      voluntaryContextSwitchesMatch[1]
    );
  }

  const involuntaryContextSwitchesMatch = data.match(
    regexInvoluntaryContextSwitches
  );
  if (involuntaryContextSwitchesMatch) {
    timeData.involuntaryContextSwitches = parseInt(
      involuntaryContextSwitchesMatch[1]
    );
  }

  const swapsMatch = data.match(regexSwaps);
  if (swapsMatch) {
    timeData.swaps = parseInt(swapsMatch[1]);
  }

  const fileSystemInputsMatch = data.match(regexFileSystemInputs);
  if (fileSystemInputsMatch) {
    timeData.fileSystemInputs = parseInt(fileSystemInputsMatch[1]);
  }

  const fileSystemOutputsMatch = data.match(regexFileSystemOutputs);
  if (fileSystemOutputsMatch) {
    timeData.fileSystemOutputs = parseInt(fileSystemOutputsMatch[1]);
  }

  const socketMessagesSentMatch = data.match(regexSocketMessagesSent);
  if (socketMessagesSentMatch) {
    timeData.socketMessagesSent = parseInt(socketMessagesSentMatch[1]);
  }

  const socketMessagesReceivedMatch = data.match(regexSocketMessagesReceived);
  if (socketMessagesReceivedMatch) {
    timeData.socketMessagesReceived = parseInt(socketMessagesReceivedMatch[1]);
  }

  const signalsDeliveredMatch = data.match(regexSignalsDelivered);
  if (signalsDeliveredMatch) {
    timeData.signalsDelivered = parseInt(signalsDeliveredMatch[1]);
  }

  const pageSizeMatch = data.match(regexPageSize);
  if (pageSizeMatch) {
    timeData.pageSize = parseInt(pageSizeMatch[1]);
  }

  const exitStatusMatch = data.match(regexExitStatus);
  if (exitStatusMatch) {
    timeData.exitStatus = parseInt(exitStatusMatch[1]);
  }

  return timeData;
}

module.exports = getFormattedTimeData;
