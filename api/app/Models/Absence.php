<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 19 Jul 2019 16:20:24 +0000.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Absence
 * 
 * @property int $absenceid
 * @property int $collegeid
 * @property int $courseid
 * @property int $teacherid
 * @property \Carbon\Carbon $absencetime
 * @property int $reason
 * @property string $description
 * @property int $creatorid
 * 
 * @property \App\Models\Course $course
 * @property \App\Models\Teacher $teacher
 * @property \App\Models\User $user
 * @property \App\Models\College $college
 *
 * @package App\Models
 */
class Absence extends Model
{
	protected $table = 'absence';
	protected $primaryKey = 'absenceid';
	public $timestamps = false;

	protected $casts = [
		'collegeid' => 'int',
		'courseid' => 'int',
		'teacherid' => 'int',
		'reason' => 'int',
		'creatorid' => 'int'
	];

	protected $dates = [
		'absencetime'
	];

	protected $fillable = [
		'collegeid',
		'courseid',
		'teacherid',
		'absencetime',
		'reason',
		'description',
		'creatorid'
	];

	public function course()
	{
		return $this->belongsTo(\App\Models\Course::class, 'courseid');
	}

	public function teacher()
	{
		return $this->belongsTo(\App\Models\Teacher::class, 'teacherid');
	}

	public function user()
	{
		return $this->belongsTo(\App\Models\User::class, 'creatorid');
	}

	public function college()
	{
		return $this->belongsTo(\App\Models\College::class, 'collegeid');
	}
}
