
student.map((data, index) => {
    console.log(`
         ID   : ${data.id}
         Name : ${data.name}
         Age  : ${data.age}
         Gender   : ${data.gender}
         Location   : ${data.location}

         Subjects     Marks        GPA      GRADE
         Bangla       ${data.bn}            ${getGpa(data.bn).gpacal}       ${getGpa(data.bn).gradecal}
         English      ${data.en}            ${getGpa(data.en).gpacal}       ${getGpa(data.en).gradecal}
         Math         ${data.math}            ${getGpa(data.math).gpacal}       ${getGpa(data.math).gradecal}
         Science      ${data.s}            ${getGpa(data.s).gpacal}       ${getGpa(data.s).gradecal}
         Social S.    ${data.ss}            ${getGpa(data.ss).gpacal}       ${getGpa(data.ss).gradecal}
         Religion     ${data.rel}            ${getGpa(data.rel).gpacal}       ${getGpa(data.rel).gradecal}
         ===============================================================================================
           Total GPA = ${cgpa(getGpa(data.bn).gpacal, getGpa(data.en).gpacal, getGpa(data.math).gpacal, getGpa(data.math).gpacal, getGpa(data.s).gpacal, getGpa(data.ss).gpacal, getGpa(data.rel).gpacal).finalCgpa}                 Final Result = ${cgpa(getGpa(data.bn).gpacal, getGpa(data.en).gpacal, getGpa(data.math).gpacal, getGpa(data.math).gpacal, getGpa(data.s).gpacal, getGpa(data.ss).gpacal, getGpa(data.rel).gpacal).finalResult}


    
    `);

});