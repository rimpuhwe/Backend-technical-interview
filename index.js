// voting system 

let votes = [
    {student: "Alice", project: "Project A" }
]
function addVote(student , project){
    
     let newVote =votes.push({student , project});
     return votes;
}
function countProjectVotes(votes){
    let voteObj = {};
    votes.reduce((earlier , newvotes) =>{


    });
}
function getUniqueProjects(votes){
    let seen = new Set();
    let projectCount ={};
    for (let vote of votes){
        
        if (seen.has(vote.project)){
          projectCount[vote.project] = (project[vote.project] || 0) + 1;  
        }
        if (projectCount === 1){
            return vote.project;
        }
        
        seen.add(projectCount[vote.project])
    }
    return seen ;
}
function findWinningProject(votes){
    if(!votes){
        return ' no votes cast'
    }
    let seen  =  new Set()
    let duplicates = new Set();
    for (let vote of votes){
        if (seen.has(vote)){
            duplicates.add(vote);
        }
        seen.add(vote);
    }
  return [...duplicates];
}

/* IT IS MORE BETTER TO USE REDUCE THAN TRADITIONAL FOR LOOP BECAUSE IT SIMPLIFIES  THE CODE 
AND REDUCE THE NUMBER OF ERRORS CAN BE OCCURED AND NUMBER OF VARIALBES FOR ASSIGNMENT  
*/ 


console.log(addVote('aime' , 'project B'));
console.log(addVote('aime' , 'project A'));
console.log(findWinningProject(votes))
console.log(getUniqueProjects(votes))
