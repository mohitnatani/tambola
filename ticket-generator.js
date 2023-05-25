const _ = require('lodash');

function generate(){
    let ticket_array = new Array(3)
    .fill(0)
    .map(()=> new Array(9).fill(0).map(()=>0));
    //console.log(ticket_array);

    let total_numbers = new Array(90)
    .fill(0)
    .map((c, cIndex)=>{return cIndex+1});
    //console.log(total_numbers);

    let total_indices = [];
    let i=0;
    while(i<3){
        let j=0;
        while(j<9){
            total_indices.push([i,j]);
            j++;
        }
        i++;
    }
    //console.log(total_indices);

    let random_indices = [], 
        first_row, 
        second_row, 
        third_row;

    first_row = _.sampleSize(total_indices.slice(0, 9), 5);
    second_row = _.sampleSize(total_indices.slice(9, 18), 5);
    third_row = _.sampleSize(total_indices.slice(18, 27), 5);

    //console.log(first_row);
    //console.log(second_row);
    //console.log(third_row);

    i=0;
    while(i<first_row.length){
        random_indices.push(first_row[i])
        i++;
    }
    i=0;

    while(i<second_row.length){
        random_indices.push(second_row[i])
        i++;
    }
    i=0;
    while(i<third_row.length){
        random_indices.push(third_row[i])
        i++;
    }
    //console.log(random_indices);
    //console.log(`length=${random_indices.length}`);
    //console.log(random_indices[2]);
    let number;
    i=0;
    while(i<random_indices.length){
        //console.log(random_indices[i]);
        if(random_indices[i][1] == 0){
            number = _.sample(total_numbers.slice(0,10));
            while(number == 0){
                number = _.sample(total_numbers.slice(0,10));
            }
            ticket_array[random_indices[i][0]][random_indices[i][1]] = number;
            total_numbers[total_numbers.indexOf(number)] = 0;
        }
        else if(random_indices[i][1] == 1){
            number = _.sample(total_numbers.slice(10, 20));
            while(number == 0){
                number = _.sample(total_numbers.slice(10, 20));
            }
            ticket_array[random_indices[i][0]][random_indices[i][1]] = number;
            //console.log(number);
            total_numbers[total_numbers.indexOf(number)] = 0;
        }
        else if(random_indices[i][1] == 2){
            number = _.sample(total_numbers.slice(20, 30));
            while(number == 0){
                number = _.sample(total_numbers.slice(20,30));
            }
            ticket_array[random_indices[i][0]][random_indices[i][1]] = number;
            //console.log(number);
            total_numbers[total_numbers.indexOf(number)] = 0;
        }
        else if(random_indices[i][1] == 3){
            number = _.sample(total_numbers.slice(30, 40));
            while(number == 0){
                number = _.sample(total_numbers.slice(30, 40));
            }
            ticket_array[random_indices[i][0]][random_indices[i][1]] = number;
            //console.log(number);
            total_numbers[total_numbers.indexOf(number)] = 0;
        }
        else if(random_indices[i][1] == 4){
            number = _.sample(total_numbers.slice(40, 50));
            while(number == 0){
                number = _.sample(total_numbers.slice(40, 50));
            }
            ticket_array[random_indices[i][0]][random_indices[i][1]] = number;
            //console.log(number);
            total_numbers[total_numbers.indexOf(number)] = 0;
        }
        else if(random_indices[i][1] == 5){
            number = _.sample(total_numbers.slice(50, 60));
            while(number == 0){
                number = _.sample(total_numbers.slice(50, 60));
            }
            ticket_array[random_indices[i][0]][random_indices[i][1]] = number;
            //console.log(number);
            total_numbers[total_numbers.indexOf(number)] = 0;
        }
        else if(random_indices[i][1] == 6){
            number = _.sample(total_numbers.slice(60, 70));
            while(number == 0){
                number = _.sample(total_numbers.slice(60, 70));
            }
            ticket_array[random_indices[i][0]][random_indices[i][1]] = number;
            //console.log(number);
            total_numbers[total_numbers.indexOf(number)] = 0;
        }
        else if(random_indices[i][1] == 7){
            number = _.sample(total_numbers.slice(70, 80));
            while(number == 0){
                number = _.sample(total_numbers.slice(70, 80));
            }
            ticket_array[random_indices[i][0]][random_indices[i][1]] = number;
            //console.log(number);
            total_numbers[total_numbers.indexOf(number)] = 0;
        }
        else if(random_indices[i][1] == 8){
            number = _.sample(total_numbers.slice(80, 90));
            while(number == 0){
                number = _.sample(total_numbers.slice(80, 90));
            }
            ticket_array[random_indices[i][0]][random_indices[i][1]] = number;
            //console.log(number);
            total_numbers[total_numbers.indexOf(number)] = 0;
        }
        i++;
    }
    //console.log(ticket_array);


    let col=0, row, temp;
    while(col<9){
        
        if(ticket_array[0][col] != 0 && ticket_array[1][col] != 0 && ticket_array[2][col] != 0){
            row=0;
            while(row<2){
                if(ticket_array[row][col] > ticket_array[row+1][col]){
                    temp = ticket_array[row][col];
                    ticket_array[row][col] = ticket_array[row+1][col];
                    ticket_array[row+1][col] = temp;
                }
                row++;
            }
        }
        else if(ticket_array[0][col] != 0 && ticket_array[1][col] != 0 && ticket_array[2][col] == 0){
            if(ticket_array[0][col] > ticket_array[1][col]){
                temp = ticket_array[0][col];
                ticket_array[0][col] = ticket_array[1][col];
                ticket_array[1][col] = temp;
            }
        }
        else if(ticket_array[0][col] != 0 && ticket_array[2][col] != 0 && ticket_array[1][col] == 0){
            if(ticket_array[0][col] > ticket_array[2][col]){
                temp = ticket_array[0][col];
                ticket_array[0][col] = ticket_array[2][col];
                ticket_array[2][col] = temp;
            }
        }
        else if(ticket_array[0][col] == 0 && ticket_array[1][col] != 0 && ticket_array[2][col] != 0){
            if(ticket_array[1][col] > ticket_array[2][col]){
                temp = ticket_array[1][col]
                ticket_array[1][col] = ticket_array[2][col]
                ticket_array[2][col] = temp
            }
        }
        col++;
    }
    console.log(ticket_array);
    return ticket_array;
}

function generateTambola(noOfTickets){
    let tambola = [];
    let i=1;
    while(i<=noOfTickets){
        tambola.push(generate());
        i++;
    }
    return tambola;
}

module.exports = {
    generateTambola
}