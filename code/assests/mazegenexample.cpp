// mazegenexample.cpp : This file contains the 'main' function. Program execution begins and ends there.
//
//  @author: Mim Small
//  @version: 0.2

#include <iostream>
#include <string>
#include <stack>
#include <cstdlib>
#include <time.h>
#include <tuple>
#include <list>
using namespace std;

// my functions

tuple<int, int> generateEdgeCoordinate()
{
    int x = rand() % 8;
    int y;
    if (x == 0 || x == 7)
    {
        y = rand() % 8;
    }
    else
    {
        int randindex = rand() % 3;
        int array[2] = {'0', '7'};
        y = array[randindex];
    }

    return make_tuple(x,y);
}

list<tuple<int, int>> getNeighbours(int x, int y)
{
    //this functions gets the room coordinates of the neighbours, and checks that they are all in bounds before returning
    list<tuple<int, int>> temp;
    list<tuple<int, int>> result;
    
    tuple<int, int> left = make_tuple(x-1, y);
    tuple<int, int> right = make_tuple(x+1, y);
    tuple<int, int> down = make_tuple(x, y-1);
    tuple<int, int> up = make_tuple(x, y+1);

    temp.push_back(left);
    temp.push_back(right);
    temp.push_back(up);
    temp.push_back(down);

    for(tuple<int, int> item : temp){
        if(get<0>(item) >= 0 && get<0>(item) <= 7 && get<1>(item) >= 0 && get<1>(item) <= 7 ){
            result.push_back(item);
        }
    }

    return result;


};

//my classes
// the maze is made up of floors. The floors are made up of rooms. there are 64 rooms in a floor.
class room
{
    public:
        bool x; 
        bool y;
        bool north;
        bool east;
        bool south;
        bool west;
        bool visited = false;

        
};
class myfloor
{
    public:
        int level;
        room rooms[8][8];

    myfloor(){
        for(int i = 0; i < 8; i++){
            for(int j = 0; j < 8; j++){
                rooms[i][j].x = i;
                rooms[i][j].y = j;
            }
        }
    }
};

class maze
{
    public:
        int numOfFloors;
        list<myfloor> floors;
        

        void generate()
        { 

            cout << "Generating world...\n";
            
            for( int i = 0; i < numOfFloors; i++){
                myfloor newfloor;
                floors.push_back(newfloor);
            }

            //Floor bug test -> turn this into real test in final version 
            /**for (myfloor f : floors ){
                cout << "there is a flooor here\n";
            }**/

            int exitFloor = rand() % (numOfFloors+1);
            tuple exit = generateEdgeCoordinate();

            for(myfloor f : floors){
               stack<room> mystack; // create stack
               mystack.push(f.rooms[get<0>(exit)][get<1>(exit)]); //push exit room to stack 
               f.rooms[get<0>(exit)][get<1>(exit)].visited = true; //mark exit room as visited

               while(mystack.empty() != true){
                room currentRoom = mystack.top(); //get top of stack
                mystack.pop(); //remove item from top of stack
                list<tuple<int, int>> neighbours = getNeighbours(currentRoom.x, currentRoom.y); //get the neighbours of the current room
                list<room> unvisited_neighbours;
                for(tuple<int, int> r : neighbours){
                    if(f.rooms[get<0>(r)][get<1>(r)].visited == false){ //if one of the neighbours has not been visited
                        unvisited_neighbours.push_back(f.rooms[get<0>(r)][get<1>(r)]); //add to list of unvisted neighbours
                    }
                }
                if(unvisited_neighbours.size() != 0){
                    mystack.push(currentRoom);
                }
                int p = rand() % unvisited_neighbours.size(); //p stands for pick. it's the number of elements to delete from the unvisted list, so that we get a random one of the unvisted rooms
                for(int i = 0; i < p; i++){
                    unvisited_neighbours.pop_back();
                }

                //make function to remove wall between current cell and chosen cell - which will be unvisneighbour.back()

                //mark chosen cell as visted and push it to the stack 

               }
            
            }
            


            
        }
};

// main
int main()
{
    srand(time(0)); // this makes the random number change everytime the program starts
    maze MyMaze;
    MyMaze.numOfFloors = 4;
    MyMaze.generate();
}
