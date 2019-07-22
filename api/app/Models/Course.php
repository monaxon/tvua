<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 19 Jul 2019 16:20:24 +0000.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Course
 * 
 * @property int $courseid
 * @property int $majorid
 * @property string $title
 * @property string $description
 * @property int $creatorid
 * 
 * @property \App\Models\User $user
 * @property \App\Models\Major $major
 * @property \Illuminate\Database\Eloquent\Collection $absences
 *
 * @package App\Models
 */
class Course extends Model
{
	protected $table = 'course';
	protected $primaryKey = 'courseid';
	public $timestamps = false;

	protected $casts = [
		'majorid' => 'int',
		'creatorid' => 'int'
	];

	protected $fillable = [
		'majorid',
		'title',
		'description',
		'creatorid'
	];

	public function user()
	{
		return $this->belongsTo(\App\Models\User::class, 'creatorid');
	}

	public function major()
	{
		return $this->belongsTo(\App\Models\Major::class, 'majorid');
	}

	public function absences()
	{
		return $this->hasMany(\App\Models\Absence::class, 'courseid');
	}
}
