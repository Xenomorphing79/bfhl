import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class ArrayController {
  @Post('/bfhl')
  processData(@Body() data: { data: any[] }): any {
    const response = {
      is_success: true,
      user_id: 'john_doe_17091999',
      email: 'john@xyz.com',
      roll_number: 'ABCD123',
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
    };

    for (const item of data.data) {
      if (typeof item === 'number') {
        if (item % 2 === 0) {
          response.even_numbers.push(item.toString());
        } else {
          response.odd_numbers.push(item.toString());
        }
      } else if (typeof item === 'string') {
        if (item.length === 1 && item.match(/[a-z]/i)) {
          response.alphabets.push(item.toUpperCase());
        }
      }
    }

    return response;
  }
}
